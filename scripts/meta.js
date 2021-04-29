function impMeta(title, description, author, copyrightOwner, indexType) {
    var mTitl = $("<title></title").text(title);
    var mChar = $("<meta charset='utf-8' />");
    var mDesc = $("<meta name='description' content='" + description + "' />");
    var mAuth = $("<meta name='author' content='" + author + "' />")
    var mCopy = $("<meta name='copyright' content='" + copyrightOwner + "' />");
    var mRobo = $("<meta name='robots' content='" + indexType + "' />");
    $("head").append(mTitl, mChar, mDesc, mAuth, mCopy, mRobo);
}
