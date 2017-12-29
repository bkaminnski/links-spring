package com.hclc.links.application;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
import java.util.stream.Stream;

import static java.util.stream.Collectors.toList;

@EnableZuulProxy
@EnableDiscoveryClient
@SpringBootApplication
public class ApplicationApplication {

    public static void main(String[] args) {
        SpringApplication.run(ApplicationApplication.class, args);
    }
}

@Controller
class ServicesMvcController {

    private final DiscoveryClient discoveryClient;

    @Autowired
    ServicesMvcController(DiscoveryClient discoveryClient) {
        this.discoveryClient = discoveryClient;
    }

    @RequestMapping("/index.html")
    public String services(Model model) {
        List<Service> services = discoveryClient.getServices().stream()
                .map(s -> discoveryClient.getInstances(s))
                .flatMap(is -> is.stream()
                        .filter(i -> "true".equalsIgnoreCase(i.getMetadata().get("frontendAvailable")))
                        .findFirst()
                        .map(Stream::of)
                        .orElseGet(Stream::empty)
                )
                .map(ServiceInstance::getServiceId)
                .map(String::toLowerCase)
                .map(Service::new)
                .collect(toList());
        model.addAttribute("services", services);
        return "index";
    }
}

@RequiredArgsConstructor
@Getter
class Service {
    private final String name;
}