package org.example.taste_trail.entity;

//import com.online.test_trail.dto.request.CustomerRequest;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.taste_trail.dto.request.CustomerRequest;

@Data
@Table
@Entity
@NoArgsConstructor
public class CustomerEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    private String firstName;

    private String lastName;

    private String username;

    private String email;

    private String password; // Should be hashed

    @Transient
    private String confirmPassword; // Not persisted in the database

    // Additional fields...

    public CustomerEntity(CustomerRequest customerRequest){
        this.firstName = customerRequest.getFirstName();
        this.lastName = customerRequest.getLastName();
        this.email = customerRequest.getEmail();
        this.username = customerRequest.getUsername();
        this.password = customerRequest.getPassword(); // Hash the password
        this.confirmPassword = customerRequest.getConfirmPassword();

        // Set other fields if necessary
    }
}
