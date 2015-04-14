<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
      <form class="modal-content" role="form" action="auth/login" method="POST">
          <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">
                  <span aria-hidden="true">&times;</span>
                  <span class="sr-only">Close</span>
              </button>
              <h4 class="modal-title" id="myModalLabel">Registration</h4>
          </div>
          <div class="modal-body">
              <div class="form-group">
                  <label for="exampleInputEmail1">Nickname</label>
                  <label id="exampleInputEmail1-error" class="error hidden-soft" for="exampleInputEmail1"></label>
                  <input type="text" name="username" class="form-control" id="exampleInputEmail1" placeholder="Enter Nickname" required data-msg-required="[required]" />

              </div>
          </div>
          <div class="modal-footer">
              <button type="submit" class="btn btn-primary pull-right">Enter</button>
          </div>
      </form>
  </div>
</div>