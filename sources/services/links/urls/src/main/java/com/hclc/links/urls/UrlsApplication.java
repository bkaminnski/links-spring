package com.hclc.links.urls;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Collection;
import java.util.stream.Stream;

import static java.util.UUID.randomUUID;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

@SpringBootApplication
public class UrlsApplication {

    public static void main(String[] args) {
        SpringApplication.run(UrlsApplication.class, args);
    }

    @Bean
    CommandLineRunner runner(UrlsRepository urlsRepository) {
        return args -> {
            Stream.of("url1", "url2", "url3").forEach(u -> urlsRepository.save(new Url(randomUUID().toString(), u)));
            urlsRepository.findAll().stream().forEach(System.out::println);
        };
    }
}

interface UrlsRepository extends JpaRepository<Url, Long> {
}

@RestController
class UrlsRestController {

    private final UrlsRepository urlsRepository;

    @Autowired
    UrlsRestController(UrlsRepository urlsRepository) {
        this.urlsRepository = urlsRepository;
    }

    @RequestMapping(value = "/urls", method = GET)
    public Collection<Url> urls() {
        return urlsRepository.findAll();
    }

    @RequestMapping(value = "/url", method = POST, consumes = "application/json")
    public ResponseEntity url(@RequestBody Url url) {
        urlsRepository.save(url);
        return ResponseEntity.noContent().build();
    }
}

@Entity
@NoArgsConstructor
@RequiredArgsConstructor
@Data
class Url {

    @Id
    @GeneratedValue
    private Long id;

    @NonNull
    private String linkSharedId;

    @NonNull
    private String url;
}