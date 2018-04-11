class Api::TicketOrdersController < ApplicationController

  def index
    @ticket_orders = TicketOrder.all
  end

  def show
    @ticket_order = TicketOrder.find(params[:id])
  end

  def update 
    @ticket_order = TicketOrder.find(params[:id])
    if @ticket_order.update(ticket_params)
      render :show 
    else
      render json: @ticket_order.errors.full_messages, status: 422 
    end  

  end 

  def create
    @ticket_order = TicketOrder.new(ticket_order_params)
    if @ticket_order.save
      render :show
    else
      render json: @ticket_order.errors.full_messages, status: 422
    end 
  end

  def destroy
    @ticket_order = TicketOrder.find(params[:id])
    if @ticket_order 
      @ticket_order.destroy 
      render :show 
    else 
      render json: ['No such order'], status: 404 
    end 
  end

  def ticket_order_params
    params.require(:ticket_order).permit(:user_id, :ticket_id, :quantity)
  end 

end
