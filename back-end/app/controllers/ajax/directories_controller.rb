class Ajax::DirectoriesController < ApplicationController


  def index
    @directories = Directory.all
    render json: @directories
  end


  def show
  end

  def new
  end

  def edit
  end

  def create
    @directory = params[:directory]
    puts @directory

    if @directory == nil
      render json: {error: 'no directory selected'}
    else
      @directories = @directory.gsub('\\', '/').split('/');
      create_directories_from_path(nil, @directories)
      render json: {path: @directories}
    end
  end

  def update
  end

  def destroy
  end

  private
    def create_directories_from_path(before, currentAndAfter)

      puts "create_directories_from_path: #{currentAndAfter}"

      # if there are directories to add
      if currentAndAfter != nil && currentAndAfter.length > 0
        # take first from the top
        first = currentAndAfter.shift

        # if first is root
        if before == nil
          found = Directory.find_by_name(first)
          if found == nil
            d = Directory.new(:name => first, :full_path => first)
            d.valid?
            puts "Add new root directory #{first}, #{d.valid?}, #{d.errors.to_json}"
            d.save
            create_directories_from_path(d, currentAndAfter)
          else
            create_directories_from_path(found, currentAndAfter)
          end
        else
          puts "Search in #{before.full_path} subdirectories"
          found = Directory.where(name: first, parent_id: before.id).first
          puts "found subdirectory #{found}"
          if found == nil
            puts "Add #{before.full_path} subdirectory: #{before.full_path}/#{first}"
            d = Directory.new(:name => first, :full_path => "#{before.full_path}/#{first}", :parent_id => before.id)
            d.save
            create_directories_from_path(d, currentAndAfter)
          else
            create_directories_from_path(found, currentAndAfter)
          end
        end

      else

        # if there's a before but no more subdirectories to add: add before to current scope
        if before != nil

          if current_user.current_scope_id != nil
            puts "Directory '#{before.full_path}' added to current scope #{current_user.current_scope_id}"
            unless before.scopes.exists?(current_user.current_scope_id)
              before.scopes.push(Scope.find(current_user.current_scope_id))
            end
            # puts Dir.entries(before.full_path)
            # add directory images to images table
            file_names = Dir.glob("#{before.full_path}/*.{jpeg,jpg,png}")
            puts file_names
            if file_names
              file_names.map{|fn| fn.split('/').last}.each do |file_name|
                found = Image.where("file_name = ? AND directory_id = ?", file_name, before.id).count > 0
                unless found
                  size = File.size("#{before.full_path}/#{file_name}").to_f
                  i = Image.new(:file_name => file_name, :directory_id => before.id, :size => size)
                  if i.valid?
                    i.save
                  end
                end
              end
            end
          else
          end
        end
      end
    end
end
