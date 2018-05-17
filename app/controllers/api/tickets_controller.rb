class Api::TicketsController < ApplicationController

  def index
    @tickets = Ticket.all 
  end

  def show
    @ticket = Ticket.find(params[:id])
  end

  def destroy 
    @ticket = Ticket.find(params[:id])
    if @ticket
      @ticket.destroy
      render :show
    else 
      render json: ['No such ticket'], status: 404
    end 
  end 

  def create 
    @ticket = Ticket.new(ticket_params)
    if @ticket.save
      redirect_to api_event_url(@ticket.event)
    else 
      render json: @ticket.errors.full_messages, status: 422
    end 
  end

  def update
    @ticket = Ticket.find(params[:id])
    if @ticket.update(ticket_params)
      render :show
    else 
      render json: @ticket.errors.full_messages, status: 422
    end     
  end 

  def ticket_params 
    params.require(:ticket).permit(:name, :price, :description, :event_id)
  end 

end
