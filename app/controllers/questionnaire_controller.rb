class QuestionnaireController < ApplicationController
  def index 
  end
  def insert_questionnaire
    # begin
      puts "HELLO"
      puts request.params
      puts "PARAMS"
      puts params
      @entry = Entry.new
      @entry.full_name = params[:fullName]
      @entry.favorite_language = params[:faveLanguage]
      @entry.years_experience = params[:yearsOfExperience]
      @entry.other_favorites = params[:otherFaveLanguages]
      if params[:isGoodDev] === "true"
        @entry.good_developer = true
      else 
        @entry.good_developer = false
      end

      puts "ENTRY"
      puts @entry.full_name
      puts @entry.favorite_language
      puts @entry.years_experience
      puts @entry.other_favorites
      puts @entry.good_developer
      puts @entry.created_at
      puts @entry.updated_at
      @entry.save

      if @entry.save === false
        respond_to do |format|
          format.html { render json: {errors: @entry.errors.full_messages}}
        end
      end

      respond_to do |format|
        format.html { render json: { save_status: @entry.save} }
      end

      # This does not work properly. I'm not familiar with Ruby error handling
    # rescue StandardError => e
    #   respond_to do |format|
    #     format.html { redner json: error}
    #   end
    # end

  end 
end
