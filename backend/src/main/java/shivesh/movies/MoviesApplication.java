package shivesh.movies;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class MoviesApplication {

	@GetMapping("/hello")
	public String helloWorld(){
		return "Hi, Shivesh!";
	}

	public static void main(String[] args) {
		SpringApplication.run(MoviesApplication.class, args);

	}

}
