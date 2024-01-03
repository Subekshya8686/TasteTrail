package org.example.taste_trail.entity;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name="user_data")
public class usersModel {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name = "id")
    Integer userId;
    String username;
    String password;
    String email;

    String firstName;
    String lastName;


    public Integer getId() {
        return userId;
    }

    public void setId(Integer userId) {
        this.userId = userId;
    }

    public String getUsername() { return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getfirstName() {
        return firstName;
    }

    public void setfirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getlastName() {
        return lastName;
    }

    public void setlastName(String lastName) {this.lastName = lastName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        usersModel that = (usersModel) o;
        return Objects.equals(userId, that.userId) && Objects.equals(username, that.username) && Objects.equals(password, that.password) && Objects.equals(email, that.email) && Objects.equals(firstName, that.firstName) && Objects.equals(lastName, that.lastName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId, username, password, email, firstName, lastName);
    }

    @Override
    public String toString() {
        return "UsersModel{" +
                "id=" + userId +
                ", login='" + username + '\'' +
                ", email='" + email + '\'' +
                ", f_name='" + firstName + '\'' +
                ", l_name='" + lastName + '\'' +
                '}';
    }
}
