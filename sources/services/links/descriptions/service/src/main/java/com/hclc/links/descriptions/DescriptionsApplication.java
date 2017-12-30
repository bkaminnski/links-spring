package com.hclc.links.descriptions;

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
public class DescriptionsApplication {

    public static void main(String[] args) {
        SpringApplication.run(DescriptionsApplication.class, args);
    }
}

interface DescriptionsRepository extends JpaRepository<Description, Long> {
}

@RestController
class DescriptionsRestController {

    private final DescriptionsRepository descriptionsRepository;

    @Autowired
    DescriptionsRestController(DescriptionsRepository descriptionsRepository) {
        this.descriptionsRepository = descriptionsRepository;
    }

    @RequestMapping(value = "/descriptions", method = GET)
    public Collection<Description> urls() {
        return descriptionsRepository.findAll();
    }

    @RequestMapping(value = "/descriptions", method = POST, consumes = "application/json")
    public ResponseEntity url(@RequestBody Description description) {
        descriptionsRepository.save(description);
        return ResponseEntity.noContent().build();
    }
}

@Entity
@NoArgsConstructor
@RequiredArgsConstructor
@Data
class Description {
    @Id
    @SequenceGenerator(name = "desc_id_seq",
            sequenceName = "desc_id_seq",
            allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,
            generator = "desc_id_seq")
    @Column(name = "desc_id", updatable = false)
    private Long id;

    @Column(name = "desc_link_shared_id", length = 36)
    @NotNull
    @NonNull
    private String linkSharedId;

    @Column(name = "desc_description", length = 2000)
    @NotNull
    @NonNull
    private String description;
}