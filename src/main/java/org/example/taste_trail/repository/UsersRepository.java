package org.example.taste_trail.repository;


import org.example.taste_trail.entity.usersModel;


import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsersRepository extends JpaRepository<usersModel, Integer> {

    Optional<usersModel> findByUsernameAndPassword(String username, String password);
}
