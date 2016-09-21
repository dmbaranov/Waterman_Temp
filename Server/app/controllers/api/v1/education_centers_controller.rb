class Api::V1::EducationCentersController < ApplicationController
  
  def index
    @education_centers = EducationCenter.all
    render "education_centers/index.json.jbuilder", status: 200
  end

  def create
    @education_center = EducationCenter.new(education_center_params)
    @education_center.user_id = current_user.id

    unless @education_center.save
      render nothing: true, status: :not_found 
    end

    render 'education_centers/create.json.jbuilder', status: 200
  end

  private
    def education_center_params
      params.require(:education_center).permit(:name, :address, :phone, :email, :site, :info)
    end
end