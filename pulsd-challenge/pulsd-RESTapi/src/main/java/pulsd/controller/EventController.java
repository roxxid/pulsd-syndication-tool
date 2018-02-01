package pulsd.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import pulsd.entity.Event;
import pulsd.service.EventService;

import java.util.List;

@RestController
@RequestMapping(value = "/events")
@CrossOrigin
public class EventController {

    @Autowired
    EventService eventService;

    @RequestMapping(method = RequestMethod.GET, value = "")
    public List<Event> findAll(){
        return eventService.findAll();
    }

    //@RequestMapping(method = RequestMethod.GET, value = "/{alphabet}")
    //public List<Word> findAllByAlphabet(@PathVariable("alphabet") String alphabet){
    //    return service.findAllByAlphabet(alphabet);
    //}

    //@RequestMapping(method = RequestMethod.GET, value = "/{title}")
    //public Word findByTitle(@PathVariable("title") String title){
    //return service.findByTitle(title);
    //}

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public Event findOne(@PathVariable("id") String wId){
        return eventService.findOne(wId);
    }


    @RequestMapping(method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_JSON_UTF8_VALUE,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @CrossOrigin
    public Event create(@RequestBody Event w){
        return eventService.create(w);
    }

    /*
    @RequestMapping(method = RequestMethod.PUT, value = "/{id}",
            consumes = MediaType.APPLICATION_JSON_UTF8_VALUE,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Word update(@PathVariable("id") String wId, @RequestBody Word w){
        return service.update(wId, w);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public void delete(@PathVariable("id") String wId){
        service.delete(wId);
    }
    */
}
