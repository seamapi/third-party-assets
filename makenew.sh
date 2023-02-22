#!/usr/bin/env sh

set -e
set -u

find_replace () {
  git grep --cached -Il '' | xargs sed -i.sedbak -e "$1"
  find . -name "*.sedbak" -exec rm {} \;
}

sed_insert () {
  sed -i.sedbak -e "$2\\"$'\n'"$3"$'\n' $1
  rm $1.sedbak
}

sed_delete () {
  sed -i.sedbak -e "$2" $1
  rm $1.sedbak
}

check_env () {
  test -d .git || (echo 'This is not a Git repository. Exiting.' && exit 1)
  for cmd in ${1}; do
    command -v ${cmd} >/dev/null 2>&1 || \
      (echo "Could not find '$cmd' which is required to continue." && exit 2)
  done
  echo
  echo 'Ready to bootstrap your new project!'
  echo
}

stage_env () {
  echo
  echo 'Removing origin and tags.'
  git tag | xargs git tag -d
  git branch --unset-upstream
  git remote rm origin
  echo
  git rm -f makenew.sh
  echo
  echo 'Staging changes.'
  git add --all
  echo
  echo 'Done!'
  echo
}

makenew () {
  echo 'Answer all prompts.'
  echo 'There are no defaults.'
  echo 'Example values are shown in parentheses.'
  read -p '> Package title (My Package): ' mk_title
  read -p '> Package name (@namespace/my-package): ' mk_slug
  read -p '> Short package description (Foos and bars.): ' mk_description
  read -p '> GitHub repository name (my-repo): ' mk_repo

  sed_delete README.md '9,101d'
  sed_insert README.md '9i' 'TODO'

  find_replace "s/^  \"version\": \".*\"/  \"version\": \"0.0.0\"/g"
  find_replace "s/TypeScript Module Package Skeleton/${mk_title}/g"
  find_replace "s/Package skeleton for a TypeScript module\./${mk_description}/g"
  find_replace "s|@seamapi/makenew-tsmodule|${mk_slug}|g"
  find_replace "s|makenew-tsmodule|${mk_repo}|g"

  echo
  echo 'Replacing boilerplate.'
}

check_env 'git read sed xargs'
makenew
stage_env
exit