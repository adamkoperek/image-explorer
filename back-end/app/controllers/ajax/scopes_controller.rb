class Ajax::ScopesController < ApplicationController
  def index
    @scopes = Scope.all
    render json: @scopes
  end

  def destroy
  end

  def create
    scope_name = params[:scope_name]

    if scope_name == nil
      render json: {error: 'No scope name.'}
    else

      found = Scope.find_by_name(scope_name)
      if found
        render json: {error: "Scope #{scope_name} already exists."}
      else

        new_scope = Scope.new(:owner_id => user_id, :name => scope_name)
        if new_scope.save
          render json: {success: "Scope #{scope_name} created."}
        else
          render json: {error: "Scope #{scope_name} could not be created."}
        end

      end

    end
  end
end
