package org.example.taste_trail.controller;

//import com.project.recipe.model.UsersModel;
//import com.project.recipe.service.UsersService;
import org.example.taste_trail.entity.usersModel;
//import org.example.taste_trail.service.*;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class UsersController {
    private final usersService usersService;

    public UsersController(usersService usersService) {
        this.usersService = usersService;
    }

    @GetMapping("/register")
    public  String getRegisterPage(Model model ){
        model.addAttribute("registerRequest",new usersModel());
        return "register_page";

    }
    @GetMapping("/login")
    public  String getLoginPage(Model model)
    {
        model.addAttribute("loginRequest",new usersModel());
        return "login_page";

    }


    @GetMapping("/profile")
    public String getProfilePage( Model model ) {


        return "user_profile";
    }


    @GetMapping("/profile/add_recipe")
    public  String getAddRecipePage(){
        return "add_recipe";

    }

    @PostMapping("/register")
    public String register(@ModelAttribute usersModel usersModel){
        System.out.println("register request: "+ usersModel);
        org.example.taste_trail.entity.usersModel registeredUser = usersService.registerUser(usersModel.getUsername(), usersModel.getPassword(), usersModel.getEmail(), usersModel.getfirstName(), usersModel.getlastName());
        return registeredUser==null ? "error_page": "redirect:/login";
    }
    @PostMapping("/login")
    public String login(@ModelAttribute usersModel usersModel){
        System.out.println("login request: "+ usersModel);
        org.example.taste_trail.entity.usersModel authenticated = usersService.authenticate(usersModel.getUsername(), usersModel.getPassword());
        if(authenticated !=null){
            return "redirect:/profile";

        }
        else{
            return "error_page";
        }
    }


}