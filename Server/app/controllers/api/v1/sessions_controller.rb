class Api::V1::SessionsController < ApplicationController

  def create
    @user = User.find_by_email(params[:session][:email])
    if @user && @user.authenticate(params[:session][:password])
      render 'sessions/create.json.jbuilder', status: 200
    else
      render nothing: true, status: :not_found 
    end 
  end

  # def destroy
  #   session[:user_id] = nil
  #   redirect_to '/'
  # end
end