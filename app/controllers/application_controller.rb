class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def spa
    render 'layouts/application'
  end
end
