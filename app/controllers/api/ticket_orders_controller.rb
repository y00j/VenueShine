class Api::TicketOrdersController < ApplicationController

  def index
    @ticket_orders = TicketOrder.all
  end

  def show
    @ticket_order = TicketOrder.find(params[:id])
  end

  def update 
    @ticket_order = TicketOrder.find(params[:id])
    if @ticket_order.update(ticket_order_params)
      render :show 
    else
      render json: @ticket_order.errors.full_messages, status: 422 
    end  

  end 

  def create
    ActiveRecord::Base.transaction do 
      begin 
        params[:ticket_orders].keys.each do |ticket_id|
          user_id = current_user.id
          @ticket_order = TicketOrder.new(
            ticket_id: ticket_id, 
            user_id: user_id, 
            quantity: params[:ticket_orders][ticket_id][:quantity]
          )
          @ticket_order.save!
        end 
        
        rescue ActiveRecord::Rollback
          render json: "ticket error", status: 422

      end 
    end 
    redirect_to api_user_url(current_user.id)
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
