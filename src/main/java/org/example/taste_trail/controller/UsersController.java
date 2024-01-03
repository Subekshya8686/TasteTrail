package org.example.taste_trail.controller;

//import com.project.recipe.model.UsersModel;
//import com.project.recipe.service.UsersService;
import org.apache.catalina.User;
import org.example.taste_trail.entity.UsersModel;
//import org.example.taste_trail.service.*;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class UsersController {
    private final UsersService usersService;

    public UsersController(UsersService usersService) {
        this.usersService = usersService;
    }

    @GetMapping("/register")
    public  String getRegisterPage(Model model ){
        model.addAttribute("registerRequest",new UsersModel());
        return "register_page";

    }
    @GetMapping("/login")
    public  String getLoginPage(Model model)
    {
        model.addAttribute("loginRequest",new UsersModel());
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
    public String register(@ModelAttribute UsersModel usersModel){
        System.out.println("register request: "+ usersModel);
        UsersModel registeredUser = usersService.registerUser(usersModel.getLogin(), usersModel.getPassword(), usersModel.getEmail(),usersModel.getDob(),usersModel.getF_name(), usersModel.getL_name(), usersModel.getGender());
         return registeredUser==null ? "error_page": "redirect:/login";
    }
    @PostMapping("/login")
    public String login(@ModelAttribute UsersModel usersModel){
        System.out.println("login request: "+ usersModel);
        UsersModel authenticated = usersService.authenticate(usersModel.getLogin(), usersModel.getPassword());
        if(authenticated !=null){
            return "redirect:/profile";

        }
        else{
            return "error_page";
        }
    }


}