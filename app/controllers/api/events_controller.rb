class Api::EventsController < ApplicationController

  def index 
    @events = Event.all
    
  end 

  def show 
    @event = Event.find(params[:id])
    
  end

  def update 
    @event = Event.find(params[:id])
    if @event.update(event_params) 
      render :show
    else 
      render json: @event.errors.full_messages, status: 422
    end 

  end 
  
  def destroy
    @event = Event.find(params[:id])
    if @event
      @event.destroy
      render "api/events/show"
    else 
      render json: ["No such event"], status: 404
    end 
  end 

  def create
    @event = Event.new(event_params)
    if @event.save 
      render "api/events/show"
    else 
      render json: @event.errors.full_messages, status: 422
    end 
  end
  
  def event_params 
    params.require(:event).permit(
      :title, 
      :address, 
      :image, 
      :description,
      :tickets_available,
      :start_date,
      :end_date,
      :organizer_id,
      )
  end 

  
end
