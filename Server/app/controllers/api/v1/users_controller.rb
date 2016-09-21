class Api::V1::UsersController < ApplicationController

  def create 
    # puts JSON.parse(params)
    @user = User.new(user_params)  

    unless @user.save
      render nothing: true, :status => 500
    end
    render 'users/create.json.jbuilder', status: 200
  end

  private
    def user_params
      params.require(:user).permit(:email, :password)
    end
end