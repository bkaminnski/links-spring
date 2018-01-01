package com.hclc.links.uniqueids;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PreDestroy;
import java.util.ArrayList;
import java.util.Collection;
import java.util.UUID;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.logging.Level;
import java.util.logging.Logger;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@SpringBootApplication
public class UniqueIdsApplication {

    public static void main(String[] args) {
        SpringApplication.run(UniqueIdsApplication.class, args);
    }
}

@RestController
class UrlsRestController {

    private final UniqueIdsGenerator uniqueIdsGenerator;

    @Autowired
    UrlsRestController(UniqueIdsGenerator uniqueIdsGenerator) {
        this.uniqueIdsGenerator = uniqueIdsGenerator;
    }

    @RequestMapping(value = "/uniqueIds", method = GET)
    public Collection<String> uniqueIds() throws InterruptedException {
        return uniqueIdsGenerator.getNextPortion();
    }
}

@Component
class UniqueIdsGenerator {

    private final static int PORTION_SIZE = 100;
    private final static int MAX_QUEUE_SIZE = 10000;
    private final BlockingQueue<String> ids = new LinkedBlockingQueue<>(MAX_QUEUE_SIZE);
    private volatile boolean continueGeneration = true;
    private Thread generationThread;

    public Collection<String> getNextPortion() throws InterruptedException {
        Collection<String> idsPortion = new ArrayList<>(PORTION_SIZE);
        for (int i = 0; i < PORTION_SIZE; i++) {
            idsPortion.add(ids.take());
        }
        return idsPortion;
    }

    @EventListener
    public void onApplicationEvent(ContextRefreshedEvent event) {
        if (generationThread != null)
            return;

        generationThread = new Thread(this::generate);
        generationThread.start();
    }

    @PreDestroy
    public void stopGeneration() {
        continueGeneration = false;
        generationThread.interrupt();
    }

    private void generate() {
        try {
            while (continueGeneration) {
                ids.put(UUID.randomUUID().toString());
            }
        } catch (InterruptedException ex) {
            Logger.getLogger(UniqueIdsGenerator.class.getName()).log(Level.INFO, "generation of unique ids was interrupted", ex);
        }
        Logger.getLogger(UniqueIdsGenerator.class.getName()).log(Level.INFO, "generation of unique ids was stopped");
    }
}