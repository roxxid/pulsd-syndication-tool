package pulsd.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pulsd.entity.Event;
import pulsd.repository.EventRepository;

import java.util.List;

@Service
public class EventServiceImplementation implements EventService{

    @Autowired
    EventRepository eventRepository;

    public List<Event> findAll() {
        return eventRepository.findAll();
    }

    public Event findOne(String id) {
        Event existing = eventRepository.findOne(id);
        if (existing == null){
            //handle exceptions here , 404
            //throw new ResourceNotFound("Employee with id: "+ id +" does'nt exist.");
        }
        return existing;
    }

    @Transactional
    public Event create(Event e) {
        Event existing = eventRepository.findOne(e.getId());
        if( existing != null ){
            //handle exceptions here , 400 Bad Request
        }
        return eventRepository.create(e);
    }

}
