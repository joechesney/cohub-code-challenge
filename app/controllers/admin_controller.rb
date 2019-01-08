class AdminController < ApplicationController
    def index
        
    end

    def authorize
        if (params[:username] === 'admin' && params[:password] === 'password')
            respond_to do |format|
                format.html { render json: {authorized: true } }
                format.json { render json: {authorized: true } }
            end
        else
            respond_to do |format|
                format.html { render json: {authorized: false } }
                format.json { render json: {authorized: false } }
            end
        end
    end
end
