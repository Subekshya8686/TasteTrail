//package org.example.taste_trail.entity;
//
//import jakarta.persistence.*;
//import lombok.*;
//
//@Getter
//@Setter
//@NoArgsConstructor
//@AllArgsConstructor
//@Entity
//@Table(name = "content")
//public class ContentEntity {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "content_id")
//    private Long contentId;
//
//    @Column(name = "recipe_name", nullable = false)
//    private String recipeName;
//
//    @Column(name = "recipe_description", length = 500)
//    private String recipeDescription;
//
//    @Column(name = "prep_time")
//    private int prepTime;
//
//    @Column(name = "ingredients", length = 1000)
//    private String ingredients;
//
//    @Column(name = "serving")
//    private int serving;
//
//    @Column(name = "recipe_steps", length = 2000)
//    private String recipeSteps;
//
//    @Column(name = "image")
//    private String image;
//
//}

package org.example.taste_trail.entity;

import jakarta.persistence.*;
import lombok.*;

//import javax.persistence.*;

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

    @Column(name = "recipe_title", nullable = false)
    private String recipeTitle;

    @Column(name = "recipe_description", length = 500)
    private String recipeDescription;

    @Column(name = "prep_time_hours")
    private int preparationTimeHours;

    @Column(name = "prep_time_minutes")
    private int preparationTimeMinutes;

    @Column(name = "quantity_number")
    private int recipeQuantityNumber;

    @Column(name = "quantity_type")
    private String recipeQuantityType;

    @Column(name = "category_type")
    private String categoryType;

    @Column(name = "step_description", length = 500)
    private String stepDescription;

    @Column(name = "used_ingredients", length = 2000)
    private String usedIngredients;

    @Column(name = "recipe_photo")
    private String recipePhoto; // Change the type accordingly based on your requirement

    // Add any other necessary fields and annotations
}
