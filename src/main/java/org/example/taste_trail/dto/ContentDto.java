package org.example.taste_trail.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ContentDto {

    private Long contentId;
    private String recipeTitle;
    private MultipartFile recipePhotoFile;
    private String recipeDescription;
    private int recipeQuantityNumber;
    private String recipeQuantityType;
    private int preparationTimeHours;
    private int preparationTimeMinutes;
    private String categoryType;
    private String stepDescription;
    private String[] usedIngredients;
}