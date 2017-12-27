package isep.web.sakila.dao.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import isep.web.sakila.jpa.entities.Film;
import isep.web.sakila.jpa.entities.Rental;

public interface RentalRepository extends CrudRepository<Rental, Integer> {
	
	@Query("select r.inventory.film from Rental r where r.customer.id = ?1 and r.returnDate = null")
	public List<Film> findRentalsByCustomerId(int id);
	
	@Query("from Film f where f.id not in (select r.inventory.film.id from Rental r where r.customer.id = ?1 and r.returnDate = null)")
	public List<Film> findNoRentedFilmsByCustomerId(int id);
	
	@Query("from Rental r where r.customer.id = ?1 and r.inventory.film.id = ?2 and r.returnDate = null")
	public Rental findRentalByCustomerAndFilmId(int customerId, int filmId);
	
}
