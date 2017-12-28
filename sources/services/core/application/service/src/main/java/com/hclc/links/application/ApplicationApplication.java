package com.hclc.links.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;

@EnableZuulProxy
@SpringBootApplication
public class ApplicationApplication {

    public static void main(String[] args) {
        SpringApplication.run(ApplicationApplication.class, args);
    }
}