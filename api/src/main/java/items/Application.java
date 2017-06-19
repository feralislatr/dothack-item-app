package items;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.boot.CommandLineRunner;
import org.springframework.beans.factory.annotation.Autowired;

@SpringBootApplication
public class Application implements CommandLineRunner {

	@Autowired 
	private ItemRepository repository;

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Override
    public void run(String[] args) throws Exception{

    	//repository.deleteAll();

        String id;

    	Item i1 = new Item();
        id = "1";
    	i1.setId(id);
    	i1.setQuantity(25);
    	i1.setName("Fairy's Orb");
    	i1.setDesc("Reveals Chaos Gates and treasure chests on map");
    	repository.save(i1);

    	Item i2 = new Item();
        id = "2";
    	i2.setId(id);
    	i2.setQuantity(16);
    	i2.setName("Mage's Soul");
    	i2.setDesc("Restores 150 SP");
    	repository.save(i2);

    	Item i3 = new Item();
        id = "3";
    	i3.setId(id);
    	i3.setQuantity(30);
    	i3.setName("Fortune Wire");
    	i3.setDesc("Disarms Risky Treasure");
    	repository.save(i3);

    	Item i4 = new Item();
        id = "4";
    	i4.setId(id);
    	i4.setQuantity(9);
    	i4.setName("Sprite Ocarina");
    	i4.setDesc("Return to the field from inside a dungeon");
    	repository.save(i4);


    	System.out.println("Items returned by findAll()");
    	System.out.println("---------------------------");
    	for (Item item : repository.findAll()){
    		System.out.println(item.getName());

		}





    }





}