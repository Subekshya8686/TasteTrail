package org.example.taste_trail.service.impl;


import org.example.taste_trail.entity.usersModel;
import org.example.taste_trail.repository.UsersRepository;
import org.springframework.stereotype.Service;

@Service
public class usersService {

    private final UsersRepository usersRepository;

    public usersService(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    public usersModel registerUser (String username, String password, String email, String firstName, String lastName)
    {
        if(username ==null || password ==null)
        {
            return null;
        }
        else
        {
            usersModel usersModel = new usersModel();
            usersModel.setEmail(email);
            usersModel.setUsername(username);
            usersModel.setPassword(password);
            usersModel.setfirstName(firstName);
            usersModel.setlastName(lastName);
            return usersRepository.save(usersModel);
        }
    }

    public usersModel authenticate(String username , String password){
        return usersRepository.findByUsernameAndPassword(username, password).orElse(null);

    }


}
