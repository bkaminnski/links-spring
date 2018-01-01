package com.hclc.links.keywords;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Collection;

import static org.springframework.data.domain.Sort.Direction.DESC;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

@SpringBootApplication
public class KeywordsApplication {

    public static void main(String[] args) {
        SpringApplication.run(KeywordsApplication.class, args);
    }
}

interface KeywordsRepository extends JpaRepository<Keywords, Long> {
}

@RestController
class KeywordsRestController {

    private final KeywordsRepository keywordsRepository;

    @Autowired
    KeywordsRestController(KeywordsRepository keywordsRepository) {
        this.keywordsRepository = keywordsRepository;
    }

    @RequestMapping(value = "/keywords", method = GET)
    public Collection<Keywords> urls() {
        return keywordsRepository.findAll(new Sort(DESC, "id"));
    }

    @RequestMapping(value = "/keywords", method = POST, consumes = "application/json")
    public ResponseEntity url(@RequestBody Keywords keywords) {
        keywordsRepository.save(keywords);
        return ResponseEntity.noContent().build();
    }
}

@Entity
@NoArgsConstructor
@RequiredArgsConstructor
@Data
class Keywords {
    @Id
    @SequenceGenerator(name = "keyw_id_seq",
            sequenceName = "keyw_id_seq",
            allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,
            generator = "keyw_id_seq")
    @Column(name = "keyw_id", updatable = false)
    private Long id;

    @Column(name = "keyw_link_shared_id", length = 36)
    @NotNull
    @NonNull
    private String linkSharedId;

    @Column(name = "keyw_keywords", length = 2000)
    @NotNull
    @NonNull
    private String keywords;
}