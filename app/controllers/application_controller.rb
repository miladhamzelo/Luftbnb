class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  helper_method :logged_in?, :current_user

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def logged_in?
    !current_user.nil?
  end

  def require_user
    unless logged_in?
      render json: ['invalid credentials'], status: 401
    end
  end
end
