package org.example.taste_trail.dto.request;

import lombok.Data;

@Data
public class CustomerRequest {
    Long userId;

    String firstName;

    String lastName;

    String username;

    String email;

    String password;

    String confirmPassword;
}
