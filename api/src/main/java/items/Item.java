package items;

import org.springframework.data.annotation.Id;

public class Item{

    @Id private String id;
    private int quantity;
    private String name;
    private String desc;


    public Item(){
    	
    }


    public String getId() {
        return id;
    }

    public int getQuantity() {
        return quantity;
    }

    public String getName() {
        return name;
    }

    public String getDesc() {
        return desc;
    }



    public void setId(String id) {
        this.id = id;
    }

    public void setQuantity(int quantity) {
    	this.quantity = quantity;
    }

    public void setName(String name) {
    	this.name = name; 
    }

    public void setDesc(String desc) {
     	this.desc = desc; 
    }



}