class Api::V1::PortsController < ApplicationController
  
  def index
    @ports = Port.all
    render "ports/index.json.jbuilder", status: 200
  end

  def create
    @port = Port.new(port_params)
    @port.user_id = current_user.id

    unless @port.save
      render nothing: true, status: :not_found 
    end

    render 'ports/create.json.jbuilder', status: 200
  end

  private
    def port_params
      params.require(:port).permit(:name, :address, :phone, :site, :receiption, :delivery, :testing, :price)
    end
end