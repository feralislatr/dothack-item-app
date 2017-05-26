package items;

import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.mongodb.repository.MongoRepository;


//@RepositoryRestResource(collectionResourceRel = "items", path = "items") //not required for a repository to be exported. It is only used to change the export details
public interface ItemRepository extends MongoRepository<Item, String> {

	public Item findByName(@Param("name") String name);


}