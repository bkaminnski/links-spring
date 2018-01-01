package com.hclc.links.urls;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Collection;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

@SpringBootApplication
public class UrlsApplication {

    public static void main(String[] args) {
        SpringApplication.run(UrlsApplication.class, args);
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

    @RequestMapping(value = "/urls", method = POST, consumes = "application/json")
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
    @SequenceGenerator(name = "url_id_seq",
            sequenceName = "url_id_seq",
            allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,
            generator = "url_id_seq")
    @Column(name = "url_id", updatable = false)
    private Long id;

    @Column(name = "url_link_shared_id", length = 36)
    @NotNull
    @NonNull
    private String linkSharedId;

    @Column(name = "url_url", length = 2000)
    @NotNull
    @NonNull
    private String url;
}