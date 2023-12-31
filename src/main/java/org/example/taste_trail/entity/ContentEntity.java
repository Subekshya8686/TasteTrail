package org.example.taste_trail.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "content")
public class ContentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "content_id")
    private Long contentId;

    @Column(name = "recipe_name", nullable = false)
    private String recipeName;

    @Column(name = "recipe_description", length = 500)
    private String recipeDescription;

    @Column(name = "prep_time")
    private int prepTime;

    @Column(name = "ingredients", length = 1000)
    private String ingredients;

    @Column(name = "serving")
    private int serving;

    @Column(name = "recipe_steps", length = 2000)
    private String recipeSteps;

    @Column(name = "image")
    private String image;

}
