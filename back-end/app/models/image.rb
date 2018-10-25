class Image < ApplicationRecord
  belongs_to :directory

  attr_accessor :full_path

  def as_json(options = { })
    super((options || { }).merge({
      :methods => [:full_path]
    }))
  end
end
