class Image < ApplicationRecord
  belongs_to :directory
  has_and_belongs_to_many :tags

  attr_accessor :full_path

  def as_json(options = { })
    super((options || { }).merge({
      :methods => [:full_path]
    }))
  end
end
