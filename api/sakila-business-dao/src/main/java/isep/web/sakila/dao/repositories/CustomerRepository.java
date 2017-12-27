package isep.web.sakila.dao.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import isep.web.sakila.jpa.entities.Customer;

public interface CustomerRepository extends CrudRepository<Customer, Integer>  {

	@Query("from Customer p order by lastName asc")
	public List<Customer> findAllOrderByLastName();
}
