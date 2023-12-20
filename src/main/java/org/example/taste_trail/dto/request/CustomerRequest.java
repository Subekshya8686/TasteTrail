package org.example.taste_trail.dto.request;

import lombok.Data;

@Data
public class CustomerRequest {
    Long id;

    String fullName;

    String phoneNumber;

    String address;

    String email;
}
