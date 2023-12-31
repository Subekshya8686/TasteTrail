package org.example.taste_trail.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ContentDto {

    private Long contentId;
    private String recipeName;
    private String recipeDescription;
    private int prepTime;
    private String ingredients;
    private int serving;
    private String recipeSteps;
    private String image;
}
