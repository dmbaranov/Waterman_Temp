class ApplicationController < ActionController::API

  helper_method :current_user 

  def current_user 
    @current_user ||= User.find(params[:session][:user_id]) if params[:session][:user_id]
  end

  def require_user 
    render nothing: true, status: :not_found  unless current_user 
  end
end
