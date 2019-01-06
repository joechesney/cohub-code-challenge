class QuestionnaireController < ApplicationController
  def index 
  end
  def insert_questionnaire
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

    respond_to do |format|
      format.html { render :index }
    end
    # respond_to do |format|
    #   format.json { render json: @entry }
    # end
    # render "questionnaire/insert_questionnaire"
    # need to find the entry data
    # sql = "INSERT INTO entries (
    #   favorite_language, 
    #   full_name, 
    #   years_experience, 
    #   good_developer, 
    #   other_favorites, 
    #   created_at, 
    #   updated_at
    #   ) VALUES (?, ?, ?, ?, ?, ?, ?)"
    # ActiveRecord::Base.connection.execute(sql, request.params)
  end 
end
