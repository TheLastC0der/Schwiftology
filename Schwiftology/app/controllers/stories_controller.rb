class StoriesController < ApplicationController

  def index
    @stories = Story.all
  end

  def show
    @story = Story.find(params[:id])
  end

  def new
    @stories = Story.new
  end

  def create
    @stories = @commentable.story.new comment_params

    if @stories.save
      redirect_to :back, notice: 'Your Story was successfully posted!'
    else
      redirect_to :back, notice: "Your Story wasn't posted!"
    end
  end

end
