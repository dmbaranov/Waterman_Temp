class Api::V1::UniversitiesController < ApplicationController
  
  def index
    @universities = University.all
    render "universities/index.json.jbuilder", status: 200
  end

  def create
    @university = University.new(university_params)
    @university.user_id = current_user.id

    unless @university.save
      render nothing: true, status: :not_found 
    end

    render 'universities/create.json.jbuilder', status: 200
  end

  private
    def university_params
      params.require(:university).permit(:name, :address, :phone, :site, :info)
    end
end