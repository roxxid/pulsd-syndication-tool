package pulsd.entity;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Calendar;
import java.util.UUID;

@Entity
@NamedQueries({
        @NamedQuery(name = "Event.findAll()", query = "SELECT e from Event e ORDER BY e.createdOn DESC" )
})
public class Event {

    @Id
    @Column(columnDefinition = "VARCHAR(36)")
    private String id;

    private String name;
    private String description;

    private Timestamp createdOn;

    private String startDate;
    private String startTime;
    private String startTimezone;
    private String endDate;
    private String endTime;
    private String endTimezone;

    private String currency;

    //private Integer likes;
    //private Integer dislikes;
    //private String hashtag;
    //private String email;
    //private boolean nsfw;

    public Event(){
        this.id = UUID.randomUUID().toString();
        Calendar calendar = Calendar.getInstance();
        this.createdOn = new java.sql.Timestamp(calendar.getTime().getTime());
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Timestamp getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(Timestamp createdOn) {
        this.createdOn = createdOn;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getStartTimezone() {
        return startTimezone;
    }

    public void setStartTimezone(String startTimezone) {
        this.startTimezone = startTimezone;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public String getEndTimezone() {
        return endTimezone;
    }

    public void setEndTimezone(String endTimezone) {
        this.endTimezone = endTimezone;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }
}
