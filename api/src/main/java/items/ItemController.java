package items;

import java.util.HashMap;
import java.util.Map;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/items")
public class ItemController {

    @Autowired
    ItemRepository itemRepo;

    // Get all items
    @RequestMapping(
    	// value="/items", 
    	method=RequestMethod.GET)
    public ResponseEntity<Collection<Item>> listItems(){
    	//Collection<Item> items = itemMap.values();
        Collection<Item> items = itemRepo.findAll();
    	return new ResponseEntity<Collection<Item>>(items, HttpStatus.OK);
    }

    // Get one item
    @RequestMapping(
    	value="/{id}", 
    	method=RequestMethod.GET)
    public ResponseEntity<Item> getItem(@PathVariable("id") String id){ //Integer id
    	// Item item = itemMap.get(id);
        Item item = itemRepo.findOne(id);
    	return new ResponseEntity<Item>(item, HttpStatus.OK);
    }

    //Create item
    @RequestMapping(
    	value="/new",
    	method=RequestMethod.POST,
    	consumes=MediaType.APPLICATION_JSON_VALUE,
    	produces=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Item> newItem(@RequestBody Item item){
    	Item createdItem = itemRepo.save(item);
    	return new ResponseEntity<Item>(createdItem, HttpStatus.CREATED);

    }

    //Use items
    @RequestMapping(
    	value="/{id}/use")
    public ResponseEntity<Item> useItem(@PathVariable("id") String id){ //Integer id
    	//Item item = itemMap.get(id);
        Item item = itemRepo.findOne(id);
    	if (item.getQuantity() == 0){
    		System.out.println("You have no more "+ item.getName()+"s");
    		itemRepo.delete(id);
    		return null;
    	}
    	item.setQuantity(item.getQuantity() - 1);
        itemRepo.save(item);
    	System.out.println("You have used 1 "+ item.getName());
    	return new ResponseEntity<Item>(item, HttpStatus.OK);
    }


    //Update item --- must send entire json object 
    @RequestMapping(
    	value="/update",
    	method=RequestMethod.PUT,
    	consumes=MediaType.APPLICATION_JSON_VALUE,
    	produces=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Item> updateItem(@RequestBody Item item){
    	Item deltaItem = itemRepo.save(item);
    	return new ResponseEntity<Item>(deltaItem, HttpStatus.OK);
    }


    //Delete item --- must send id as json 
    @RequestMapping(
    	value="/{id}",
        method=RequestMethod.DELETE,
    	consumes=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Item> deleteItem(@PathVariable("id") String id, @RequestBody Item deletedItem){ //Integer id
    	//deletedItem = itemMap.get(id);
        deletedItem = itemRepo.findOne(id);
    	if (deletedItem != null){
            itemRepo.delete(id);
           return new ResponseEntity<Item>(HttpStatus.NO_CONTENT); 
        } else{
            return new ResponseEntity<Item>(HttpStatus.INTERNAL_SERVER_ERROR); 
        }   
    }


    // //Cooler delete item
    // @RequestMapping(
    //     value="/{id}/discard",
    //     //consumes=MediaType.APPLICATION_JSON_VALUE)
    // public ResponseEntity<Item> discardItem(@PathVariable("id") String id, @RequestBody Item discardedItem){ //Integer id
    //   //discardedItem = itemMap.get(id);
    //     discardedItem = itemRepo.findOne(id);
    //     if (discardedItem != null){
    //         System.out.println("Discarded "+ discardedItem.getName());
    //         itemRepo.delete(id);
    //        return new ResponseEntity<Item>(HttpStatus.NO_CONTENT); 
    //     } else{
    //         return new ResponseEntity<Item>(HttpStatus.INTERNAL_SERVER_ERROR); 
    //     }
        
    // }

    
}
