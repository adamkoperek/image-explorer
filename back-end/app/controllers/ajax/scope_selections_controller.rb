class Ajax::ScopeSelectionsController < ApplicationController

  def destroy
    current_user.current_scope_id = nil
    current_user.save
  end

  def create
    scope_id = params[:scope_id]
    scope_name = params[:scope_name]

    puts "select #{scope_id}, #{scope_name}, #{current_user}"

    if scope_id == nil
      render json: {error: 'No scope id given.'}
    else

      found = Scope.find_by_id(scope_id)
      if found == nil
        render json: {error: "Scope #{scope_name} doesn't exists."}
      else
        if found.owner_id != user_id
          render json: {error: "Given scope does not belong to current user."}
        else
          c = current_user
          c.current_scope_id = scope_id
          if c.save
            render json: {success: "Scope #{scope_name} selected."}
          else
            render json: {error: "Scope #{scope_name} could not be selected."}
          end
        end
      end
    end
  end
end
