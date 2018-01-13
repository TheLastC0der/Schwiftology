class CommentsController < ApplicationController
  before_action :find_link


  def create
    @comment = @link.comments.create(params[:comment].permit(:content))
    @comment.user_id = current_user.id
    @comment.save

    if @comment.save
      redirect_to link_path(@link)
    else
      render 'new'
    end
  end

  def destroy
    
  end

  private


  def find_link
    @link = Link.find(params[:link_id])
  end

end
